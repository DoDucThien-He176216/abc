import React from 'react'
import { Card, Image } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StyleNameProduct, WrapperPriceDiscountText, WrapperPriceText, WrapperReportText } from './style';
import {  StarFilled } from '@ant-design/icons';
import logo from '../../assets/images/logo.png';
const CardComponent = () => {
    return (
        <Card
            hoverable
            // headerStyle ={{width: '200px', height: '200px'}}
            style={{ width: '200px'}}
            cover={<img style={{width:'200px', height:'200px', position: 'relative'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            bodyStyle={{padding: '10px'}}
        >
            <img style={{height: '14px' ,width: '68px', position:'absolute',top:'0'  }} src= {logo} />
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReportText>
                <span style={{marginRight: '4px'}}>4.96
                <StarFilled  style={{fontSize:'10px', color: 'yellow'}}/>
                </span>
                <span>| Đã bán 1000+</span>
            </WrapperReportText>
            <WrapperPriceText>
                 1.000.000d 
                    <WrapperPriceDiscountText>
                         -5%
                    </WrapperPriceDiscountText> 
            </WrapperPriceText>
        </Card>
    )
}

export default CardComponent