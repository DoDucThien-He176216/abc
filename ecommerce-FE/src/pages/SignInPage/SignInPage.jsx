import React from "react";
import InputForm from "../../component/InputForm/InputForm";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import ImageLogo from "../../assets/images/logo-login.png";
import { Image } from "antd";
import ButtonComponent from "../../component/ButtonComponent/ButtonComponent";
const SignInPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tài khoản</p>
          <InputForm style={{ marginBottom: '10px'}} placeholder = 'abc@gmail.com' />
          <InputForm placeholder = 'password'  />
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textbutton={"Đăng nhập"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <WrapperTextLight>Quên mật khẩu</WrapperTextLight>
          <p>
            Chưa có tài khoản <WrapperTextLight>Tạo tài khoản</WrapperTextLight>
          </p>
        </WrapperContainerLeft>

        <WrapperContainerRight>
          <Image src={ImageLogo} height="203px" width="203px" />
          <h4>Mua sắm tại TIKI</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
