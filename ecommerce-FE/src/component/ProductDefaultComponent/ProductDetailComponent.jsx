import { Col, Image, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/test.webp";
import imageProductSmall from "../../assets/images/imagesmall.webp";
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import {
  WrapperAddressProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleCol,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled,MinusOutlined,PlusOutlined } from "@ant-design/icons";
const ProductDetailComponent = () => {
  return (
    <Row style={{ padding: "16px", background: "#fff" }} preview={false}>
      <Col span={10}>
        <Image src={imageProduct} alt="image product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleCol span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image product"
              preview={false}
            />
          </WrapperStyleCol>
          <WrapperStyleCol span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image product"
              preview={false}
            />
          </WrapperStyleCol>
          <WrapperStyleCol span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image product"
              preview={false}
            />
          </WrapperStyleCol>
          <WrapperStyleCol span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image product"
              preview={false}
            />
          </WrapperStyleCol>
          <WrapperStyleCol span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image product"
              preview={false}
            />
          </WrapperStyleCol>
        </Row>
      </Col>
      <Col span={14}>
        <WrapperStyleNameProduct>
          Sách- Thám tử lừng danh Conan - Combo 10 tập từ 81 đến 90
        </WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến </span>
          <span className="address">HCM</span> -
          <span className="change-address">Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div
          style={{
            margin: "10px 0 20px",
            padding: "10px 0",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Số lượng</div>
          <WrapperQualityProduct>
            <button
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
              
            >
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
            <WrapperInputNumber
             
              size="small"
            />
            <button
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
              
            >
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>

        <div style={{ display: 'flex', aliggItems: 'center', gap: '12px' }}>
                        <div>
                            <ButtonComponent
                                size={40}
                                styleButton={{
                                    background: 'rgb(255, 57, 69)',
                                    height: '48px',
                                    width: '220px',
                                    border: 'none',
                                    borderRadius: '4px'
                                }}
                                
                                textbutton={'Chọn mua'}
                                styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                            ></ButtonComponent>
                            
                        </div>
                        <ButtonComponent
                            size={40}
                            styleButton={{
                                background: '#fff',
                                height: '48px',
                                width: '220px',
                                border: '1px solid rgb(13, 92, 182)',
                                borderRadius: '4px'
                            }}
                            textbutton={'Mua trả sau'}
                            styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
                        ></ButtonComponent>
      </div>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
